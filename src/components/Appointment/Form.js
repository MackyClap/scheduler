import React, {useState} from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";


const Form = (props) => {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || "");

  const reset = () => {
    setStudent(props.student || "");
    setInterviewer(props.interviewer || null);
  }

  const cancel = () => {
    reset();
    props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            value={student}
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(e) => {setStudent(e.target.value)}}
          />
        </form>
        <InterviewerList 
          value={interviewer}
          interviewers={props.interviewers}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  );
}

export default Form;