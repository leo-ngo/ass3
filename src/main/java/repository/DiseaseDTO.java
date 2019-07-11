package repository;

import model.Disease;
import model.Drug;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by CoT on 10/14/17.
 */
@Transactional
@Repository
public class DiseaseDTO {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addNewDisease( Disease disease){
        sessionFactory.getCurrentSession().save(disease);
    }

    public void deleteDisease(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Disease where id = :id");
        query.setInteger("id", id);
        Disease disease = (Disease) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(disease);
    }

    public void updateDisease(Disease disease, int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Disease where id = :id");
        query.setInteger("id", id);
        Disease updatedDisease = (Disease) query.uniqueResult();
        updatedDisease.setName(disease.getName());
        updatedDisease.setCode(disease.getCode());
        sessionFactory.getCurrentSession().update(updatedDisease);
    }

    public List<Disease> getAllDisease(int page, int size) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Disease order by id asc");
        query = setPagination(query, page,size);
        return query.list();
    }

    public Disease getDiseaseByID(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Disease where id = :id");
        query.setInteger("id", id);
        return (Disease) query.uniqueResult();
    }

    public List<Disease> getDiseasesByName(String name, int page, int size) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Disease where lower(name) like lower(:name)");
        query.setString("name", "%"+name+"%");
        query = setPagination(query,page,size);
        return query.list();
    }

    public Query setPagination(Query query, int page, int size){
        query.setFirstResult((page - 1) * size);
        query.setMaxResults(size);
        return query;
    }
}
