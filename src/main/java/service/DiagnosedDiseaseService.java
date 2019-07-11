package service;

import model.DiagnosedDisease;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.DiagnosedDiseaseDTO;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class DiagnosedDiseaseService {
    @Autowired
    DiagnosedDiseaseDTO diagnosedDiseaseDTO;

    public List<DiagnosedDisease> getAllDiagnosedDiseases(int page, int size){
        return diagnosedDiseaseDTO.getAllDiagnosedDiseases(page, size);
    }
    public DiagnosedDisease getDiagnosedDiseaseByID(int id){
        return diagnosedDiseaseDTO.getDiagnosedDiseaseByID(id);
    }

}
