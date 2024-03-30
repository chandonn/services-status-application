import { orchestrateAPIFetching } from "@/api"
import { defaultQueryIntervalTime } from "@/config/config"
import { Response } from "@/interfaces"
import { useEffect, useState } from "react"

export function useServicesStatus() {
  const [servicesStatus, setServicesStatus] = useState<Response[]>([])
  
  useEffect(() => {
    orchestrateAPIFetching().then(res => {
      setServicesStatus(res)
    })

    let queryId = setInterval(() => {
      orchestrateAPIFetching().then(res => {
        setServicesStatus(res)
      })
    }, defaultQueryIntervalTime)

    return () => {
      clearInterval(queryId)
    }
  }, [])

  return servicesStatus
}