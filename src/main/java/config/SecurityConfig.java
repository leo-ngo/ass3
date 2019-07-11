package config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by CoT on 11/12/17.
 */

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    public void setupAuthenticationBuilder(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests()
                .antMatchers("/patients/**").access("hasRole('ROLE_ADMIN')")
                .antMatchers("/drugs/**").access("hasRole('ROLE_ADMIN')")
                .antMatchers("/prescriptions/**").access("hasRole('ROLE_ADMIN')")
                .antMatchers("/visits/**").access("hasRole('ROLE_ADMIN')")
                .antMatchers("/diseases/**").access("hasRole('ROLE_ADMIN')")
                .antMatchers("/diagnosedDisease/**").access("hasRole('ROLE_ADMIN')")
                .antMatchers("/prescribedDrug/**").access("hasRole('ROLE_ADMIN')")
                .antMatchers("/students/**").access("hasRole('ROLE_USER') or hasRole('ROLE_DBA') or hasRole('ROLE_ADMIN')")
                .and().formLogin().loginPage("http://localhost/login.html")
                .and().httpBasic()
                .and().csrf().disable();

    }



    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(HttpMethod.OPTIONS, "/**");
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("henry").password("123456").roles("USER");
        auth.inMemoryAuthentication().withUser("admin").password("123456").roles("ADMIN");
    }
}
