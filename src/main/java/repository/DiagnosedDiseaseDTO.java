package repository;

import model.DiagnosedDisease;
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
public class DiagnosedDiseaseDTO {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

//    public void addPrescribedDrug( PrescribedDrug prescribedDrug){
//        sessionFactory.getCurrentSession().save(prescribedDrug);
//    }

    public List<DiagnosedDisease> getAllDiagnosedDiseases(int page, int size) {
        Query query = sessionFactory.getCurrentSession().createQuery("from DiagnosedDisease");
        query = setPagination(query, page, size);
        return query.list();
    }

    public DiagnosedDisease getDiagnosedDiseaseByID(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from DiagnosedDisease where id = :id");
        query.setInteger("id", id);
        return (DiagnosedDisease) query.uniqueResult();
    }

    public Query setPagination(Query query, int page, int size){

        query.setFirstResult((page - 1) * size);
        query.setMaxResults(size);
        return query;
    }


}
