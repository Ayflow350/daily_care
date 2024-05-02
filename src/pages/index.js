import Layout from "src/layout/Layout";
import Navbar from "src/layout/Header/Navbar";
import InsuranceGallery from "src/components/gallery/InsuranceGallery";
import Footer from "src/layout/Footer/Footer";
import Hero from "src/components/hero/Hero"
import FeatureImgContentOne from "src/components/feature-img-content/FeatureImgContentOne";
import QuickSupport from "src/components/support/QuickSupport";
import IntegrationOne from "src/components/integration/IntegrationOne";



export default function Home() {
  return (
     <Layout>
      <Navbar  />
      <Hero/>
      <InsuranceGallery />
      <FeatureImgContentOne />
      <IntegrationOne/>
      <QuickSupport/>
  
      <Footer footerGradient />
      </Layout>
  );
}
