import React from "react";
import TeamOne from "../assets/teamone.jpeg";
import TeamTwo from "../assets/teamtwo.jpeg";
import Three from "../assets/teamthree.jpeg";
const Team = () => {
  return (
    <div>
      <section class="bg-light py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="mb-4 display-5 text-center">Our Team</h2>
              <p class="text-secondary mb-5 text-center lead fs-4">
                We are a group of innovative, experienced, and proficient members.
                You will love to collaborate with us.
              </p>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div class="container overflow-hidden">
          <div class="row gy-3 gy-lg-0 gx-xxl-5">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div class="card-body p-0">
                  <figure class="m-0 p-0">
                    <img
                      class="img-fluid"
                      loading="lazy"
                      src={TeamOne}
                      alt=""
                    />
                    <figcaption class="m-0 p-4">
                      <h4 class="mb-1">Aqeel Ahmad</h4>
                      <p class="text-secondary mb-0">Director</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div class="card-body p-0">
                  <figure class="m-0 p-0">
                    <img class="img-fluid" loading="lazy" src={Three} alt="" />
                    <figcaption class="m-0 p-4">
                      <h4 class="mb-1">Nouman Ashraf</h4>
                      <p class="text-secondary mb-0">COO</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div class="card-body p-0">
                  <figure class="m-0 p-0">
                    <img
                      class="img-fluid"
                      loading="lazy"
                      src={TeamTwo}
                      alt=""
                    />
                    <figcaption class="m-0 p-4">
                      <h4 class="mb-1">Asif Abdul Rahman</h4>
                      <p class="text-secondary mb-0">CEO</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
