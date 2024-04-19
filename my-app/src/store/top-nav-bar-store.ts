"use client"
import { create } from "zustand"

type PatientDashboardStoreState = {
    patientDashboardView: string | null ,
}

export const usePatientStore = create<PatientDashboardStoreState>(() => ({
    patientDashboardView: null,

}))