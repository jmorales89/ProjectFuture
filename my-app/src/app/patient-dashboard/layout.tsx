export default function PatientDashboard ({
  children,
  patientTable,
  newPatientForm,

}: {
  children: React.ReactNode,
  patientTable: React.ReactNode,
  newPatientForm: React.ReactNode
  

}) {
  return (
    <>
      <div> {children}</div>
      <div>{patientTable}</div>
      <div>{newPatientForm}</div>
    </>
  )
}
