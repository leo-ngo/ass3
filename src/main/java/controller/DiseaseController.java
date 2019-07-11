package controller;

import model.Disease;
import service.DiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@CrossOrigin
@RequestMapping(path = "/")
public class DiseaseController {

    @Autowired
    private DiseaseService diseaseService;

    @RequestMapping(path = "diseases", method = RequestMethod.GET)
    public List<Disease> getAllDiseases(@RequestParam(defaultValue = "1")int page,
                                        @RequestParam(defaultValue = "100")int size){
        return diseaseService.getAllDiseases(page,size);
    }

    @RequestMapping(path = "diseases", method = RequestMethod.POST)
    public void addNewDisease(@RequestBody Disease disease){
        diseaseService.addDisease(disease);
    }

    @RequestMapping(path = "diseases/searchByID/{id}", method = RequestMethod.GET)
    public Disease searchByID(@PathVariable int id) {
        return diseaseService.getDiseaseByID(id);
    }

    @RequestMapping(path = "diseases/searchByName", method = RequestMethod.GET)
    public List<Disease> searchByName(@RequestParam String name,
                                   @RequestParam(defaultValue = "1")int page,
                                   @RequestParam(defaultValue = "100")int size) {
        return diseaseService.getDiseasesByName(name, page, size);
    }


    @RequestMapping(path = "diseases/delete/{id}", method = RequestMethod.DELETE)
    public void deleteDisease(@PathVariable int id) {
        diseaseService.deleteDisease(id);
    }

    @RequestMapping(path = "diseases/update/{id}", method = RequestMethod.PUT)
    public void updateDisease(@RequestBody Disease disease, @PathVariable int id) {
        diseaseService.updateDisease(disease, id);
    }


}


