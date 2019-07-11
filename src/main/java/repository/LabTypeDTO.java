package repository;

import model.Disease;
import model.Drug;
import model.LabType;
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
public class LabTypeDTO {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addLab( LabType labType){
        sessionFactory.getCurrentSession().save(labType);
    }

    public void deleteLab(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabType where id = :id");
        query.setInteger("id", id);
        LabType labType = (LabType) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(labType);
    }

    public void updateLab(LabType labType, int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabType where id = :id");
        query.setInteger("id", id);
        LabType updatedLab = (LabType) query.uniqueResult();
        updatedLab.setService(labType.getService());
        sessionFactory.getCurrentSession().update(updatedLab);
    }

    public List<LabType> getAllLab(int page, int size) {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabType order by id asc");
        query = setPagination(query, page,size);
        return query.list();
    }

    public LabType getLabByID(int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabType where id = :id");
        query.setInteger("id", id);
        return (LabType) query.uniqueResult();
    }

    public List<LabType> getLabService(String service, int page, int size) {
        Query query = sessionFactory.getCurrentSession().createQuery("from LabType where lower(service) like lower(:service)");
        query.setString("service", "%"+service+"%");
        query = setPagination(query,page,size);
        return query.list();
    }



    public Query setPagination(Query query, int page, int size){
        query.setFirstResult((page - 1) * size);
        query.setMaxResults(size);
        return query;
    }
}
