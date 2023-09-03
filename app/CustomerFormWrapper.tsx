import dynamic from 'next/dynamic';

const CustomerForm = dynamic(() => import('../pages/CustomerForm.client'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

function CustomerFormWrapper() {
  return <CustomerForm />;
}

export default CustomerFormWrapper;
