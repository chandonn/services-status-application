import { APIEndpoints, APIFetchEndpoint } from "@/config/config"
import { Response } from "@/interfaces"

export async function fetchApiEndpoint(url: string): Promise<string> {
  // return '{"success":true,"message":"Healthy :3","hostname":"default-8af096e09627","time":1711714209321}'
  return new Promise((resolve, _) => {
    let apiStatus = '{ "success": false, "message": "Error", "hostname": "", "time": null }'
    
    fetch(url).then(response => {
      resolve(response.text())
    }).catch(_ => {
      resolve(apiStatus)
    })
  })
}

export async function orchestrateAPIFetching(): Promise<Response[]> {
  const response = await Promise.all(APIEndpoints.map((end: string) => fetchApiEndpoint(APIFetchEndpoint.replace("API_NAME", end))))
  const result: Response[] = response.map((r, i) => {
    const status = JSON.parse(r) as Response
    return {
      name: APIEndpoints[i].toUpperCase(),
      message: status.message.split(" ")[0],
      hostname: status.hostname,
      time: status.time ? (new Date(status.time)).toTimeString().split(" ")[0] : "",
      success: status.success,
    }
  })

  return result
}