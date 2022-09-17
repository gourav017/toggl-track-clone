import React, { useRef, useState } from "react";
import TimerBox from "./Homepage/TimerBox";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { BsClockHistory, BsShieldCheck, BsStars } from "react-icons/bs";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../store/auth/auth.actions";

function Homepage() {
  const { screen } = useScreenWidth();

  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ref = useRef();
  const hanldeChange = (e) => {
    let { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(form));
    const UserInfo = JSON.parse(localStorage.getItem("userData"));
    dispatch(signUp(UserInfo));
    navigate("/login");
  };

  return (
    <div>
      <div>
        <div
          style={{ padding: "3rem", backgroundColor: "#2c1438", color: "snow" }}
        >
          <h1
            style={{
              fontSize: screen > 800 ? "4rem" : "2rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              lineHeight: "3rem",
            }}
          >
            Time tracking for <em style={{ color: "hotpink" }}>better</em> work,
            not overwork.
          </h1>
          <div
            style={
              screen > 800
                ? {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                  }
                : {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    padding: "2rem",
                  }
            }
          >
            <div style={{ marginBottom: "4rem" }}>
              <p style={{ fontSize: "1.5rem" }}>
                Join 5 million users in using the world's best time tracking
                software
              </p>
              <form onSubmit={handleSubmit}>
                <div style={{ padding: "2rem" }}>
                  {/* input-box */}
                  <div>
                    <input
                      style={{
                        backgroundColor: "#2c1438",
                        border: "1px solid gray",
                        padding: "0.75rem 1.5rem",
                        width: "100%",
                      }}
                      type="email"
                      placeholder="Email"
                      onChange={hanldeChange}
                      name="Email"
                      ref={ref}
                      value={form.Email}
                    />
                    <br />
                    <br />
                    <input
                      style={{
                        backgroundColor: "#2c1438",
                        border: "1px solid gray",
                        padding: "0.75rem 1.5rem",
                        width: "100%",
                      }}
                      type="password"
                      placeholder="Strong password"
                      name="password"
                      onChange={hanldeChange}
                      ref={ref}
                      value={form.password}
                    />
                    <br />
                    <br />
                  </div>
                  {/* button box */}
                  <div
                    style={
                      screen > 800
                        ? { display: "flex", justifyContent: "space-between" }
                        : { display: "grid", gridTemplateColumns: "1fr" }
                    }
                  >
                    <div style={{ marginBottom: "2rem" }}>
                      <button
                        style={
                          screen > 800
                            ? {
                                color: "snow",
                                padding: "0.75rem 1.5rem",
                                borderRadius: "25px",
                                backgroundColor: "#e57cd8",
                              }
                            : {
                                color: "snow",
                                padding: "0.75rem 1.5rem",
                                borderRadius: "25px",
                                backgroundColor: "#e57cd8",
                                width: "100%",
                              }
                        }
                        type="submit"
                      >
                        Sign up with email
                      </button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span>Or sign up with :</span>
                      <span>
                        <FaGoogle
                          style={{
                            fontSize: "3rem",
                            padding: "10px",
                            borderRadius: "25px",
                            backgroundColor: "#2c1438",
                            border: "1px solid snow",
                            margin: "0 0.5rem",
                          }}
                        />
                      </span>
                      <span>
                        <FaApple
                          style={{
                            fontSize: "3rem",
                            padding: "10px",
                            borderRadius: "25px",
                            backgroundColor: "#2c1438",
                            border: "1px solid snow",
                            margin: "0 0.5rem",
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </form>
              <p style={{ fontSize: "12px" }}>
                By signing up, you agree to our{" "}
                <em style={{ color: "hotpink", textDecoration: "underline" }}>
                  terms of service
                </em>
                ,{" "}
                <em style={{ color: "hotpink", textDecoration: "underline" }}>
                  privacy policy
                </em>{" "}
                and to receiving marketing communication from Toggl Track. You
                can opt out anytime.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginBottom: "4rem" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <TimerBox />
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    padding: "2rem",
                  }}
                >
                  <div>
                    Stand-up meeting 0:01:22 3D illustration TODO“I love the
                    ease of just clocking in and out with{" "}
                    <em style={{ color: "#e91e63" }}>just one click!</em>”
                  </div>
                  <div style={{ textAlign: "end" }}>– Quelani P.</div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={
              screen > 800
                ? {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    padding: "1rem",
                    color: "black",
                    backgroundColor: "#fce4d8",
                  }
                : {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    padding: "1rem",
                    color: "black",
                    backgroundColor: "#fce4d8",
                  }
            }
          >
            <div
              style={{
                width: "100%",
                margin: "1rem",
                gap: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BsClockHistory style={{ fontSize: "2rem" }} />
              <p>No credit card required. Sign up and start tracking!</p>
            </div>
            <div
              style={{
                width: "100%",
                margin: "1rem",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <BsShieldCheck style={{ fontSize: "2rem" }} />
              <p>4.7 out of 5 stars from 3,800 user reviews.</p>
            </div>
            <div
              style={{
                width: "100%",
                margin: "1rem",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <BsStars style={{ fontSize: "2rem" }} />
              <p>GDPR-compliant. Your security is our highest priority.</p>
            </div>
          </div>
          <p style={{ textAlign: "center", margin: "2rem 0" }}>
            Onboarding a team?
            <span style={{ margin: "0 1rem", color: "hotpink" }}>
              Book a demo
            </span>
          </p>
        </div>

        <div
          style={{
            padding: "3rem",
            backgroundColor: "#fef3ed",
            color: "#2c1438",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                fontSize: screen > 800 ? "3rem" : "2rem",
                fontWeight: "bold",
                marginBottom: "2rem",
                lineHeight: "3rem",
                width: "70%",
                textAlign: "center",
              }}
            >
              Toggl Track saves you{" "}
              <em style={{ color: "hotpink" }}>time and money</em> , no matter
              how you use it.
            </h1>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: screen > 800 ? "1fr 1fr" : "1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ padding: "3rem", backgroundColor: "#fae5f6" }}>
              <h2
                style={{
                  fontSize: "1rem",
                  color: "hotpink",
                  fontWeight: "bold",
                }}
              >
                BILLING AND INVOICING
              </h2>
              <h1
                style={{
                  fontSize: "2rem",
                  lineHeight: "2rem",
                  marginBottom: "2rem",
                }}
              >
                Do you <em>sell your time?</em> We'll help you get the numbers
                right. Every time.
              </h1>
              <div
                style={{
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <button
                    style={{
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "#e57dd7",
                      color: "snow",
                      borderRadius: "25px",
                    }}
                  >
                    Learn more
                  </button>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <img src="/feature-billing.avif" alt="img" />
                </div>
              </div>
              <p style={{ fontWeight: "bold" }}>
                "We saved $18,000 by identifying missing billable hours, thanks
                to Toggl Track"
              </p>
              <p style={{ textDecoration: "underline" }}>
                — Platinum Companies, Operations Consulting
              </p>
            </div>
            <div style={{ padding: "3rem", backgroundColor: "#fce4d8" }}>
              <h2
                style={{
                  fontSize: "1rem",
                  color: "hotpink",
                  fontWeight: "bold",
                }}
              >
                EMPLOYEE TIME TRACKING
              </h2>
              <h1
                style={{
                  fontSize: "2rem",
                  lineHeight: "2rem",
                  marginBottom: "2rem",
                }}
              >
                Improve team productivity and <em>happiness</em> without the
                micromanagement.
              </h1>
              <div
                style={{
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <button
                    style={{
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "#e57dd7",
                      color: "snow",
                      borderRadius: "25px",
                    }}
                  >
                    Learn more
                  </button>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <img src="/feature-employee.avif" alt="img" />
                </div>
              </div>
              <p style={{ fontWeight: "bold" }}>
                "We had a 100% adoption rate. Toggl Track was wholeheartedly
                accepted by everyone."
              </p>
              <p style={{ textDecoration: "underline" }}>
                — Newlogic, Software Consulting
              </p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: screen > 800 ? "1fr 1fr 1fr" : "1fr",
              gap: "1rem",
            }}
          >
            <div style={{ padding: "1.5rem", backgroundColor: "#fce4d8" }}>
              <h2
                style={{
                  color: "hotpink",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                PROJECT BUDGETING
              </h2>
              <p style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                No more anxiety over late deadlines and unprofitable projects.
                Plan and set budgets with confidence!
              </p>
              <p>Learn more</p>
            </div>
            <div style={{ padding: "1.5rem", backgroundColor: "#ffebbe" }}>
              <h2
                style={{
                  color: "hotpink",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                REPORTING
              </h2>
              <p style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                Quickly spot trends and get a big picture view in one intuitive
                dashboard. Share key insights for transparency.
              </p>
              <p>Learn more</p>
            </div>
            <div style={{ padding: "1.5rem", backgroundColor: "#fae5f6" }}>
              <h2
                style={{
                  color: "hotpink",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                PAYROLL
              </h2>
              <p style={{ marginBottom: "3rem", fontSize: "1rem" }}>
                Pay employees accurately and on time. Calculating salaries has
                never been so easy.
              </p>
              <p>Learn more</p>
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ padding: "3rem" }}>
              <h2 style={{ fontSize: "2rem", color: "snow" }}>
                70,000+ customers use Toggl Track to hit their productivity and
                business goals
              </h2>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <img src="/illo-teams.avif" alt="img" />
            </div>
          </div>
        </div>

        <div style={{ paddingBottom: "3rem" }}>
          <div
            style={{
              padding: "4rem",
              display: "grid",
              gridTemplateColumns: screen > 800 ? "1fr 1fr 1fr" : "1fr",
              gap: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  backgroundColor: "snow",
                  padding: "2rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "2rem",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  20%
                </h2>
                <p style={{ marginBottom: "2rem" }}>
                  Toggl Track increased PR Agency Sweat+Co’s profitability by at
                  least 20% with accurate billable hours tracking.
                </p>
                <p style={{ color: "hotpink" }}>Read case study</p>
              </div>
            </div>
            <div
              style={{
                marginTop: screen > 800 ? "2rem" : "0",
              }}
            >
              <div
                style={{
                  backgroundColor: "snow",
                  padding: "2rem",
                  marginTop: "3rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "2rem",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  100%
                </h2>
                <p style={{ marginBottom: "2rem" }}>
                  Software consultancy Moove It provides 100% transparency to
                  their clients, even in a company as large as 100+!
                </p>
                <p style={{ color: "hotpink" }}>Read case study</p>
              </div>
            </div>
            <div
              style={{
                marginTop: screen > 800 ? "4rem" : "-2rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "snow",
                  padding: "2rem",
                  marginTop: "6rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "2rem",
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  45%
                </h2>
                <p style={{ marginBottom: "2rem" }}>
                  Creative studio RogueMark Studios boosted resource allocation
                  by 45% thanks to accurate labor forecasting.
                </p>
                <p style={{ color: "hotpink" }}>Read case study</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <img src="/brands.avif" alt="icon" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  padding: "1rem 2rem",
                  color: "snow",
                  backgroundColor: "hotpink",
                  borderRadius: "25px",
                }}
              >
                Start tracking for free
              </button>
              <p
                style={{
                  color: "snow",
                  marginLeft: "2rem",
                }}
              >
                Or book a demo
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "3rem",
            backgroundColor: "#fef3ed",
            color: "#2c1438",
          }}
        >
          <div
            style={{
              display: "grid",
              padding: "3rem",
              gridTemplateColumns: screen > 800 ? "1fr 1fr" : "1fr",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  A time tracking tool{" "}
                  <em style={{ color: "hotpink" }}>anyone</em> can use
                </h1>
                <p>
                  Whether you are a team of one or a thousand, we understand
                  that being productive is different for everyone. This is why
                  Toggl Track is built into any workflow.
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/video button.avif"
                  alt="img"
                  style={{ opacity: "0.9", width: "100%" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "30%",
                  }}
                >
                  <button
                    style={{
                      color: "snow",
                      backgroundColor: "#2d1438",
                      padding: "1rem 2rem",
                      borderRadius: "30px",
                    }}
                  >
                    Watch 1-minute video
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: screen > 800 ? "1fr 1fr 1fr" : "1fr",
              gap: "3rem",
              marginBottom: "2rem",
              padding: "3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "300px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <img
                  src="/integration.png"
                  alt="img"
                  width="150px"
                  height="150px"
                />
              </div>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  100+ integrations
                </h2>
                <p>
                  Use Toggl Track with the tools you already use. Track time in
                  100+ popular tools with the Toggl Track browser extension.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "300px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <img
                  src="/desktop.png"
                  alt="img"
                  width="200px"
                  height="200px"
                />
              </div>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Works where you work
                </h2>
                <p>
                  Track time on our web app, desktop, and mobile apps. You can
                  even start the timer from your stopwatch!
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "300px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <img src="/like.png" alt="img" width="150px" height="150px" />
              </div>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Designed to be easy
                </h2>
                <p>
                  No instruction manual needed. But if you ever need help, our
                  support team has a track record of responding within 3 hours!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ color: "snow", padding: "3rem", backgroundColor: "#422a4c" }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
              Ready to get on{" "}
              <em style={{ color: "hotpink", textAlign: "center" }}>Track</em>?
            </h1>
          </div>

          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: screen > 800 ? "1fr 1fr" : "1fr",
                padding: screen > 1000 ? "2rem 5rem" : "2rem",
              }}
            >
              <div>
                <div
                  style={
                    screen > 800
                      ? {
                          backgroundColor: "#2c1438",
                          color: "#fce4d8",
                          padding: "3rem",
                          width: "110%",
                          position: "relative",
                          fontSize: "1.2rem",
                        }
                      : {
                          backgroundColor: "#2c1438",
                          color: "#fce4d8",
                          padding: "2rem",
                        }
                  }
                >
                  <h1
                    style={{
                      fontSize: "2.1rem",
                      fontWeight: "bold",
                      marginBottom: "2rem",
                    }}
                  >
                    Sign up for free
                  </h1>
                  <p>
                    All plans come with a free, 30-day trial of Toggl Track
                    Premium—no credit card required. Upgrade at the end of the
                    trial or continue using Track for free.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <button
                      style={{
                        display: "flex",
                        padding: "0.75rem 1.5rem",
                        color: "black",
                        backgroundColor: "snow",
                        borderRadius: "25px",
                        margin: "1rem 0",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <span>
                        <FcGoogle
                          style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                        />
                      </span>{" "}
                      <span style={{ fontSize: "1rem" }}>
                        Sign up via Google
                      </span>
                    </button>
                    <button
                      style={{
                        display: "flex",
                        padding: "0.75rem 1.5rem",
                        color: "black",
                        backgroundColor: "snow",
                        borderRadius: "25px",
                        margin: "1rem 0",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <span>
                        <FaApple
                          style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                        />
                      </span>{" "}
                      <span style={{ fontSize: "1rem" }}>
                        Sign up via Apple
                      </span>
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <button
                      style={{
                        display: "flex",
                        padding: "0.75rem 1.5rem",
                        color: "black",
                        backgroundColor: "snow",
                        borderRadius: "25px",
                        margin: "1rem",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <span>
                        <GoMail
                          style={{ fontSize: "1.3rem", marginRight: "1.5rem" }}
                        />
                      </span>{" "}
                      <span>or sign up via email</span>
                    </button>
                  </div>
                  <p style={{ fontSize: "14px" }}>
                    By signing up, you agree to our{" "}
                    <em
                      style={{ color: "hotpink", textDecoration: "underline" }}
                    >
                      terms of service
                    </em>
                    ,{" "}
                    <em
                      style={{ color: "hotpink", textDecoration: "underline" }}
                    >
                      privacy policy
                    </em>{" "}
                    and to{" "}
                    <em
                      style={{ color: "hotpink", textDecoration: "underline" }}
                    >
                      receiving
                    </em>{" "}
                    marketing communication from Toggl Track. You can opt out
                    anytime.
                  </p>
                </div>
              </div>
              <div>
                <div
                  style={
                    screen > 800
                      ? {
                          backgroundColor: "#fce4d8",
                          color: "#2c1438",
                          padding: "3rem",
                          paddingLeft: screen > 1000 ? "6rem" : "4rem",
                          fontSize: "1.2rem",
                          marginTop: "17rem",
                          zIndex: "1",
                        }
                      : {
                          backgroundColor: "#fce4d8",
                          color: "#2c1438",
                          padding: "2rem",
                          paddingLeft: "2rem",
                          marginTop: "0",
                        }
                  }
                >
                  <h2
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      marginBottom: "2rem",
                    }}
                  >
                    Prefer a product demo instead?
                  </h2>
                  <p style={{ marginBottom: "2rem" }}>
                    Request a 30-minute personalized demo to see how Toggl Track
                    can meet your time tracking goals
                  </p>
                  <button
                    style={{
                      padding: "0.75rem 1.5rem",
                      color: "snow",
                      backgroundColor: "#e67dd8",
                      borderRadius: "25px",
                    }}
                  >
                    Book a demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#564160" }}>
          <img
            src="/badges.avif"
            alt="img"
            style={{ minHeight: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
