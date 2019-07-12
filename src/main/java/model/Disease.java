package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "disease")
public class Disease {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 500)
    private String code;

    @Column
    private String name;



    @OneToMany(mappedBy = "disease", fetch = FetchType.LAZY)
    @Cascade(CascadeType.ALL)
    @Fetch(FetchMode.SUBSELECT)
    @JsonIgnore
    private List<DiagnosedDisease> diagnosedDisease;

    public Disease() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {

        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<DiagnosedDisease> getDiagnosedDisease() {
        return diagnosedDisease;
    }

    public void setDiagnosedDisease(List<DiagnosedDisease> diagnosedDisease) {
        this.diagnosedDisease = diagnosedDisease;
    }

}
