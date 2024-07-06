import { useState } from 'react';

function MoodEntryForm() {
  const MoodEntryForm = ({ addMood }) => {
    const [date, setDate] = useState('');
    const [mood, setMood] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      addMood({ date, mood, notes});
      setDate('');
      setMood('');
      setNotes('');
    }
  };



  return(
    <>

    </>
  );
}

export default MoodEntryForm;