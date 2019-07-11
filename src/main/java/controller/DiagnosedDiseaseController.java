package controller;

import model.DiagnosedDisease;
import service.DiagnosedDiseaseService;
import service.PrescribedDrugService;
import model.PrescribedDrug;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@CrossOrigin
@RequestMapping(path = "/")
public class DiagnosedDiseaseController {

    @Autowired
    private DiagnosedDiseaseService diagnosedDiseaseService;

    @RequestMapping(path = "diagnosedDisease", method = RequestMethod.GET)
    public List<DiagnosedDisease> getAllDrugs(@RequestParam(defaultValue = "1")int page,
                                              @RequestParam(defaultValue = "100")int size){
        return diagnosedDiseaseService.getAllDiagnosedDiseases(page, size);
    }

    @RequestMapping(path = "diagnosedDisease/searchByID/{id}", method = RequestMethod.GET)
    public DiagnosedDisease searchByID(@PathVariable int id) {
        return diagnosedDiseaseService.getDiagnosedDiseaseByID(id);
    }

//    @RequestMapping(path = "prescribedDrug", method = RequestMethod.POST)
//    public void addNewDrug(@RequestBody PrescribedDrug prescribedDrug){
//        prescribedDrugService.addPrescribedDrug(prescribedDrug);
//    }


}


