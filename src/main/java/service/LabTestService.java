package service;

import model.LabTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.LabTestDTO;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class LabTestService {
    @Autowired
    LabTestDTO labDetailsDTO;

    public List<LabTest> getAllLabDetails(int page, int size){
        return labDetailsDTO.getAllLabDetail(page, size);
    }
    public LabTest getLabDetailsByID(int id){
        return labDetailsDTO.getLabDetailByID(id);
    }
    public void addLabTest( LabTest labTest){ labDetailsDTO.addLabTest(labTest);}


    }
