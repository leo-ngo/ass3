package repository;

import model.LabTest;
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
public class LabTestDTO {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addLabTest( LabTest labTest){
        sessionFactory.getCurrentSession().save(labTest);
    }

    public List<LabTest> getAllLabDetail(int page, int size) {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabTest");
        query = setPagination(query, page, size);
        return query.list();
    }

    public LabTest getLabDetailByID(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabTest where id = :id");
        query.setInteger("id", id);
        return (LabTest) query.uniqueResult();
    }

    public Query setPagination(Query query, int page, int size){

        query.setFirstResult((page - 1) * size);
        query.setMaxResults(size);
        return query;
    }


}
