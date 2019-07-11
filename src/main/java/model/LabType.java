package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "labType")
public class LabType{

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String service;



    @OneToMany(mappedBy = "labType", fetch = FetchType.LAZY)
    @Cascade(CascadeType.ALL)
    @Fetch(FetchMode.SUBSELECT)
    @JsonIgnore
    private List<LabTest> labDetails;

    public LabType() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }



    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }


    public List<LabTest> getLabDetails() {
        return labDetails;
    }

    public void setLabDetails(List<LabTest > labDetails) {
        this.labDetails = labDetails;
    }

}
