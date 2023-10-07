import moment from "moment";

const RightSideBar = () => {
  return (
    <div className="space-y-3">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">When and Where</div>
        <div className="collapse-content">
          <p>
            NYC - Financial Freedom <br /> Investor <br /> Madison Ave <br />{" "}
            New York, NY 10010 <br /> {moment().add(1, "days").calendar()}{" "}
            <br /> from 6:30 PM to 8:30 PM (EST)
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">ORGANIZER</div>
        <div className="collapse-content">
          <p>
            Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant
            morbi.Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis more... <br /> facebook.com/imorganiser{" "}
            <br />
            @imorganiser http://www.organiserweb.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
