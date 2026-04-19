import { useInView } from 'react-intersection-observer';
import { trackSection } from '../firebase';

const ScrollTracker = ({ sectionName, children }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  
  if (inView) trackSection(sectionName);

  return <div ref={ref}>{children}</div>;
};
export default ScrollTracker;