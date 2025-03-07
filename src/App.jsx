import { Routes, Route } from "react-router";
import {
  CampaignDetail,
  Home,
  Layout,
  CreateCampaign,
  Campaigns,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/campaign/:id" element={<CampaignDetail />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
