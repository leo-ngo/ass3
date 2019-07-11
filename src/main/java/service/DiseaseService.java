package service;

import model.Disease;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.DiseaseDTO;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class DiseaseService {

    @Autowired
    DiseaseDTO diseaseDTO;

    public void addDisease(Disease disease) {
        diseaseDTO.addNewDisease(disease);
    }

    public List<Disease> getAllDiseases(int page, int size) {
        return diseaseDTO.getAllDisease(page,size);

    }

    public void updateDisease(Disease disease, int id){
        diseaseDTO.updateDisease(disease,id);
    }

    public Disease getDiseaseByID(int id){
        return diseaseDTO.getDiseaseByID(id);
    }

    public List<Disease> getDiseasesByName(String name, int page, int size){
        return diseaseDTO.getDiseasesByName(name, page, size);
    }

    public void deleteDisease(int id) {
        diseaseDTO.deleteDisease(id);
    }


}
