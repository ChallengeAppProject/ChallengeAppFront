// import React, { useState } from "react";


// const initialForm = {
//   name: "",
//   id: null
// };

// const CreateChallenge = ({createData, editData}) => {

//   const [form, setForm] = useState(initialForm);

//   useEffect(() => {
//     if (editData) {
//         setForm(editData);
//     } else {
//         setForm(initialForm);
//     }
// }, [editData]);

// const handleChange = (e) => {
//   setForm({
//       ...form,
//       [e.target.name]: e.target.value
//   })
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!form.name) {
//       alert('Incomplete Data!');
//       return;
//   }

//   if (form.id === null) {
//       createData(form);
//   } else {
//       updateData(form);
//   }
// };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label>CHALLENGE TITLE</label>
//         <input
//           type="text"
//           className="form-control"
//           onChange={handleChange}
//           value={form.name}
//           placeholder="Enter title"
//           name="name"
    
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default CreateChallenge;
