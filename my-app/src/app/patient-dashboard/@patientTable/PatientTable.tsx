
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
export default function PatientsTable () {
  return (
    <>
      <Table>   
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Insurance</TableHead>
            <TableHead className='text-right'>Phone Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>Justin</TableCell>
            <TableCell>Morales</TableCell>
            <TableCell>American Insurance</TableCell>
            <TableCell className='text-right'>555-888-9999</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
