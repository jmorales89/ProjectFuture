export default function PatientDashboard ({
  children,
  patientTable,

}: {
  children: React.ReactNode,
  patientTable: React.ReactNode

}) {
  return (
    <>
      <div> {children}</div>
      <div>{patientTable}</div>

    </>
  )
}
