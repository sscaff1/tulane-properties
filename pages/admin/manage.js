import { withGoogleMap, GoogleMap, SeachBox } from 'react-google-maps';
import { Layout } from '../../layouts';
import Head from 'next/head';
import { Input } from '../../components';

const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env
  .MAP_KEY}&libraries=places`;

export default function Manage() {
  return (
    <Layout userLoggedIn>
      <Head>
        <script src={googleMapsUrl} />
      </Head>
      <form method="POST" action="/api/admin/createProperty">
        <Input label="Name" name="name" type="text" />
        <Input label="Address" name="address" type="text" />
        <Input name="location[coordinates][0]" type="hidden" />
        <Input name="location[coordinates][1]" type="hidden" />
      </form>
      <style jsx>{`
        form {
          margin: 0 auto;
          width: 600px;
          padding: 20px;
          border: 1px solid black;
          border-radius: 10px;
        }
      `}</style>
    </Layout>
  );
}
