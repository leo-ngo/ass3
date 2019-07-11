package controller;

import model.LabTest;
import service.LabTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by CoT on 7/29/18.
 */
@RestController
@CrossOrigin
@RequestMapping(path = "/")
public class LabDetailsController {

    @Autowired
    private LabTestService labTestService;

    @RequestMapping(path = "labDetail", method = RequestMethod.GET)
    public List<LabTest> getAllLabs(@RequestParam(defaultValue = "1")int page,
                                    @RequestParam(defaultValue = "100")int size){
        return labTestService.getAllLabDetails(page, size);
    }

    @RequestMapping(path = "labDetail/searchByID/{id}", method = RequestMethod.GET)
    public LabTest searchByID(@PathVariable int id) {
        return labTestService.getLabDetailsByID(id);
    }

    @RequestMapping(path = "labDetail", method = RequestMethod.POST)
    public void addLabDetail(@RequestBody LabTest labTest){
        labTestService.addLabTest(labTest);
    }


}


