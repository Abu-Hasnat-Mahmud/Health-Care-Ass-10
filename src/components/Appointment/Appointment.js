import React from "react";

const Appointment = () => {
  return (
    <>
      <div className="container d-flex align-items-center mt-5">
        <img
          style={{
            height: "500px",
          }}
          className="w-50 mx-5"
          src="https://html.softtechitltd.com/physicmed/physicmed/assets/images/appnt-img2.png"
        />

        <div className="w-50 mx-5">
          <h1 className="mb-5" style={{ color: "#1ac167" }}>Make An Appointement</h1>
          <form>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Phone Number</label>
              <input type="text" class="form-control" />
            </div>

            <button type="button" class="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appointment;
