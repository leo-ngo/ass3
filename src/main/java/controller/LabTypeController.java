package controller;

import model.LabType;
import service.DrugService;
import model.Drug;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.LabTypeService;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@CrossOrigin
@RequestMapping(path = "/")
public class LabTypeController {

    @Autowired
    private LabTypeService labTypeService;

    @RequestMapping(path = "labs", method = RequestMethod.GET)
    public List<LabType> getAllLabs(@RequestParam(defaultValue = "1")int page,
                                     @RequestParam(defaultValue = "100")int size){
        return labTypeService.getAllLab(page,size);
    }

    @RequestMapping(path = "labs", method = RequestMethod.POST)
    public void addLab(@RequestBody LabType labType){
        labTypeService.addLab(labType);
    }

    @RequestMapping(path = "labs/searchByID/{id}", method = RequestMethod.GET)
    public LabType searchByID(@PathVariable int id) {
        return labTypeService.getLabByID(id);
    }

    @RequestMapping(path = "labs/searchByService", method = RequestMethod.GET)
    public List<LabType> searchByName(@RequestParam String service,
                                   @RequestParam(defaultValue = "1")int page,
                                   @RequestParam(defaultValue = "100")int size) {
        return labTypeService.getLabServiceByName(service, page, size);
    }


    @RequestMapping(path = "labs/delete/{id}", method = RequestMethod.DELETE)
    public void deleteLab(@PathVariable int id) {
        labTypeService.deleteLab(id);
    }

    @RequestMapping(path = "labs/update/{id}", method = RequestMethod.PUT)
    public void updateLab(@RequestBody LabType labType, @PathVariable int id) {
        labTypeService.updateLab(labType, id);
    }


}


