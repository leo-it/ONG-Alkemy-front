import NewsListPublic from "../screens/NewsListPublic/NewsListPublic";
import Testimonials from "../screens/TestimonialsScreen/Testimonials";
import AboutUsScreen from "../screens/AboutUsScreen/AboutUsScreen";
import Activities from "../screens/ActivitiesScreen/Activities";
import ContactScreen from "../screens/Contact/ScreenContact";

export const URL = [
  { id: 2, url: "/actividades", Component: Activities, title: "Actividades" },
  { id: 3, url: "/novedades", Component: NewsListPublic, title: "Novedades" },
  { id: 4, url: "/about-us", Component: AboutUsScreen, title: "Nosotros" },
  { id: 5, url: "/testimonios", Component: Testimonials, title: "Testimonios" },
  { id: 6, url: "/contact", Component: ContactScreen, title: "Contacto" },
];
