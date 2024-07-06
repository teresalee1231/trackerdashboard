import { useState } from 'react';

function MoodEntryForm({ addMood }) {

    const [date, setDate] = useState('');
    const [mood, setMood] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      addMood({ date, mood, notes});
      setDate('');
      setMood('');
      setNotes('');
    };


  return(
    <>
    {/* change to another picker, have a color associated */}
    <form onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.targetValue)} required />
      <select value={mood} onChange={(e) => setMood(e.target.value)} required>
        <option value="">Select Mood</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="neutral">Neutral</option>
        <option value="excited">Excited</option>
        <option value="anxious">Anxious</option>
      </select>
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes" />
      <button type="submit">Add Mood</button>
    </form>
    </>
  );
}

export default MoodEntryForm;