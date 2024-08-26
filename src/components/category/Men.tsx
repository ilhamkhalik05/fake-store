import { Shirt } from "lucide-react"
import { Badge } from "../ui/badge"

export const MenCategory = () => {
   return (
      <Badge
        variant={'outline'}
        className="flex items-center gap-2 p-2 hover:bg-gray-100"
      >
        <Shirt size={18} color="orange" />
        Men Top
      </Badge>
   )
}