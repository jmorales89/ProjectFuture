"use client"


export default function PatientDashboard ({
  children,
  patientTable,
  newPatientForm,
  patientProfile
}: {
  children: React.ReactNode
  patientTable: React.ReactNode
  newPatientForm: React.ReactNode
  patientProfile: React.ReactNode
}) {


  // if (patientDashboardView === 'patientTable') {
  //   return (
  //     <>
  //       <div>{ patientTable }</div>
  //     </>
  //   )
  // } else if (patientDashboardView === 'patientProfile') {
  //   return (
  //     <>
  //       <div>{ patientProfile }</div>
  //     </>
  //   )
  // } else if (patientDashboardView === 'newPatientForm') {
  //   return (
  //     <>
  //       <div>{ newPatientForm }</div>
  //     </>
  //   )
  // } else {
    return (
      <>
        <div>{ children }</div>
      </>
    )
  }
// }
