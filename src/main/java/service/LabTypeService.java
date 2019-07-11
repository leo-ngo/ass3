package service;

import model.Drug;
import model.LabType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.LabTypeDTO;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class LabTypeService {

    @Autowired
    LabTypeDTO labTypeDTO;

    public void addLab(LabType labType) {
        labTypeDTO.addLab(labType);
    }

    public List<LabType> getAllLab(int page, int size) {
        return labTypeDTO.getAllLab(page,size);

    }

    public void updateLab(LabType labType, int id){
        labTypeDTO.updateLab(labType,id);
    }

    public LabType getLabByID(int id){
        return labTypeDTO.getLabByID(id);
    }

    public List<LabType> getLabServiceByName(String service, int page, int size) { return labTypeDTO.getLabService(service, page, size);}

    public void deleteLab(int id) {
        labTypeDTO.deleteLab(id);
    }


}
