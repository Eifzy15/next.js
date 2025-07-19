import { fetchFCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export default async function Page() {
  // const { query } = await params;
  const customers = await fetchFCustomers()
  console.log(customers);


  return (
    <div className="w-full">
      <div className="mt-5 flex w-full justify-center">
        < CustomersTable customers={customers} />
      </div>
    </div>
  );
}