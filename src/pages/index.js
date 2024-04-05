import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import InsuranceGallery from "@components/gallery/InsuranceGallery";
import Footer from "@layout/Footer/Footer";
import Hero from "@components/hero/Hero"
import FeatureImgContentOne from "@components/feature-img-content/FeatureImgContentOne";
import QuickSupport from "@components/support/QuickSupport";
import IntegrationOne from "@components/integration/IntegrationOne";



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
