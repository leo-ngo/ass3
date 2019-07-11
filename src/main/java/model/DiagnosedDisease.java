package model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.*;
import org.hibernate.annotations.CascadeType;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "diagnosedDisease")
public class DiagnosedDisease {
    @Id
    @Column(updatable = false, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    private Disease disease;



    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @Cascade(CascadeType.SAVE_UPDATE)
    private VisitLog visitLog;

    public DiagnosedDisease() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Disease getDisease() {
        return disease;
    }

    public void setDisease(Disease disease) {
        this.disease = disease;
    }

    public VisitLog getVisitLog() {
        return visitLog;
    }

    public void setVisitLog(VisitLog visitLog) {
        this.visitLog = visitLog;
    }


}

