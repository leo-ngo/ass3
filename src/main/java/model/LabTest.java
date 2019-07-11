package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "labTest")
public class LabTest {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String note;

    @ManyToOne
    private LabType labType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @Cascade(CascadeType.SAVE_UPDATE)
    private VisitLog visitLog;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public VisitLog getVisitLog() {
        return visitLog;
    }

    public void setVisitLog(VisitLog visitLog) {
        this.visitLog = visitLog;
    }


    public LabType getLabType() {
        return labType;
    }

    public void setLabType(LabType labType) {
        this.labType = labType;
    }
}
