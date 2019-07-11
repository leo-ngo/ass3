package repository;

import model.Patient;
import model.UserRole;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by CoT on 10/14/17.
 */
@Transactional
@Repository
public class PatientDTO {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addNewPatient( Patient newPatient){
        sessionFactory.getCurrentSession().save(newPatient);
    }

    public void deletePatient(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient where id = :id");
        query.setInteger("id", id);
        Patient patient = (Patient) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(patient);
    }

    public void updatePatient(Patient patient, int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient where id = :id");
        query.setInteger("id", id);
        Patient updatedPatient = (Patient) query.uniqueResult();
        updatedPatient.setName(patient.getName());
        updatedPatient.setBirthday(patient.getBirthday());
        updatedPatient.setGender(patient.getGender());
        updatedPatient.setAddress(patient.getAddress());
        sessionFactory.getCurrentSession().update(updatedPatient);
    }

    public List<Patient> getAllPatients(int page, int size){
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient order by id asc");
        query = setPagination(query, page, size);
        return query.list();
    }

    public Patient getPatientByID(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient where id = :id");
        query.setInteger("id", id);
        return (Patient) query.uniqueResult();
    }

    public List<Patient> getPatientsByName(String name, int page, int size) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient where lower(name) like lower(:name)");
        query.setString("name", "%"+name+"%");
        query = setPagination(query, page, size);
        return query.list();
    }

    public List<Patient> getPatientsByBirthday(String birthday, int page, int size) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Patient where cast(birthday as date) = cast(:birthday as date)");
        query.setString("birthday", birthday);
        query = setPagination(query, page, size);
        return query.list();
    }

    public Query setPagination(Query query, int page, int size){
        query.setFirstResult((page - 1) * size);
        query.setMaxResults(size);
        return query;
    }

    @Transactional
    public List<UserRole> getUserRoleByUser(String username){
        Query query = sessionFactory.getCurrentSession().createQuery("from UserRole where user.name=:username");
        query.setString("username", username);
        return query.list();
    }

}
