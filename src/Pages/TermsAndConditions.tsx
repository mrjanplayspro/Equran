
import { useNavigate } from 'react-router-dom';
import './TermsAndConditions.scss';
import { FaArrowLeft } from 'react-icons/fa';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="terms-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <h2>Terms & Conditions</h2>

      <div className="terms-text">
        <p>
       Lorem ipsum dolor sit amet consectetur. Diam morbi nisl leo aenean molestie ullamcorper. Ultrices et tristique fringilla varius pretium nisl quisque odio. Vitae porta lobortis in feugiat arcu ut dui. Tortor mauris fermentum netus tincidunt aliquam. Tempor porttitor viverra aliquet aliquam pretium. <br />   Ut aliquam tempus eros cursus. Eu lectus sed nisi at adipiscing posuere tristique donec. Ipsum cursus non bibendum malesuada. Ac placerat neque lobortis etiam ipsum pellentesque massa. Pulvinar sit pretium elit id purus elit blandit mauris. Eu sed accumsan sit elementum in. Nibh in integer elit in purus donec consectetur.
        </p>

        <p>
    Tortor viverra quam ut nulla. Et tellus leo sit volutpat consequat. Id tellus sit congue massa congue tortor malesuada egestas quis. Nam nisl ut aliquet elit faucibus lorem at nunc justo. Facilisis viverra netus tellus enim cras netus malesuada vulputate. At tempor vel nulla adipiscing lectus magna mi at. Pretium turpis proin viverra at in condimentum. Tellus interdum amet lorem integer tellus sit est sapien. Velit non interdum curabitur leo scelerisque ac purus leo praesent. Laoreet et donec semper id rutrum urna mattis. Sed nunc turpis viverra viverra in sit pellentesque scelerisque. Mi velit viverra penatibus ipsum. Id sem ornare fringilla cursus id amet.
        </p>

        <p>
         Pellentesque id purus curabitur tortor. Sagittis et ullamcorper enim tellus urna at varius massa. Quis magna interdum proin convallis ornare mauris. Nisl lobortis aliquet sed in iaculis. Nibh sit arcu neque donec vel sed integer sit eu. Tortor risus eget feugiat quam accumsan vitae. Enim nibh justo phasellus turpis faucibus risus maecenas vivamus pulvinar. Dolor mi magna tellus ultrices. Vel blandit semper pharetra at. <br /> Vestibulum tortor euismod augue quis quisque tempus ut. Neque sit integer ut sit viverra nulla maecenas aliquam. Malesuada sed auctor eget turpis proin. Nunc nunc tempus neque praesent nunc non gravida diam. Massa magna cras lorem nulla parturient. At non quis sodales elementum in proin diam tortor sed. Mi ac sed tellus vulputate mauris proin in. Sit facilisis egestas bibendum euismod elit pellentesque. Diam ut aliquam cursus a nisl rhoncus. Nunc elementum tortor elementum volutpat posuere sit nibh. Tempus in aliquam dis tempor. <br /> Ac dis est aenean ut massa vel consectetur purus. Bibendum mollis lorem curabitur potenti hendrerit. Congue neque odio sapien ut nunc elit senectus venenatis. Mi pretium viverra fermentum egestas quam tortor ultrices. Pharetra arcu est netus vestibulum turpis. Eget lectus nibh sem iaculis donec eu risus amet adipiscing. Sapien nullam odio magna sed pretium scelerisque arcu purus. Quis porttitor aliquam viverra dignissim ultrices sed eget aliquet cras. In faucibus ac tellus commodo praesent pulvinar quis. Sollicitudin scelerisque lobortis sit aliquam elit nunc enim suspendisse a.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
