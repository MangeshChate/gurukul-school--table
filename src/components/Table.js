import React from 'react'

const data = [
  {
    srno: "1",
    class: "Playgroup",
    fees: "10,000",
    NoteBook: "105",
    N_MRP: "-",
    N_Dis: "-",
    v_MRP: "395",
    v_Dis: "-",
    uni: "800",
    sho: "220",
    tot: "11,520"

  },
  {
    srno: "2",
    class: "Nursery",
    fees: "11,000",

    NoteBook: "270",
    N_MRP: "1799",
    N_Dis: "1170",
    v_MRP: "395",
    v_Dis: "260",
    uni: "900",
    sho: "220",
    tot: "13,820"

  },
  {
    srno: "3",
    class: "Jr.K.G.",
    fees: "12,000",

    NoteBook: "270",
    N_MRP: "1799",
    N_Dis: "1170",
    v_MRP: "200",
    v_Dis: "160",
    uni: "1000",
    sho: "250",
    tot: "14,850"

  },
  {
    srno: "4",
    class: "Sr.K G.",
    fees: "13,000",

    NoteBook: "270",
    N_MRP: "1799",
    N_Dis: "1170",
    v_MRP: "210",
    v_Dis: "165",
    uni: "1000",
    sho: "250",
    tot: "15,850"

  },

]


export default function Table() {
  return (
    <div className=' monospace' style={{ fontFamily: "sans-serif", fontSize: "1.2rem" }} >
      <div className="container-fluid mt-5 d-flex justify-content-center flex-column align-items-center">
        <h1 className="fw-bold">Gurukul Public School Nanded </h1>
        <hr />
        <h3>Pre-primery School Fee Strucher</h3>
        <h6>2023-24</h6>

      </div>
      <div className="justify-content-center d-flex m-5">
        <table className="table table-striped  table-bordered   table-hover overflow-scroll border-dark " >
          <thead>
            <tr className="" style={{ height: "3rem" }}>
              <th>Sr. No.</th>
              <th>Class</th>
              <th>School Fees</th>
              <th>Note Books</th>
              <th className=' '>
                <span className="d-flex justify-content-center me-5">
                  <p>Next Education</p>
                </span>
                <span className="row row-cols-2 ">
                  <span className="col-auto  w-25">MRP</span>
                  <p className="col-auto w-25">&</p>
                  <span className="col-auto ">Discount 35%</span>

                </span>

              </th>
              <th>
                <span className="d-flex justify-content-center me-5">
                  <p>Vikas</p>
                </span>
                <span className="row row-cols-2 ">
                  <span className="col-auto w-25">MRP </span>
                  <p className="col-auto w-25">&</p>

                  <span className="col-auto ">Discount 35%</span>

                </span>
              </th>
              <th>Uniform</th>
              <th>Shoes</th>
              <th>Total</th>

            </tr>
          </thead>
          <tbody>
            {
              data.map((item) => (

                <tr style={{ height: "7rem" }} >
                  <td>{item.srno}</td>
                  <td>{item.class}</td>
                  <td>{item.fees}</td>
                  <td>{item.NoteBook}</td>
                  <td>


                    <span className="row row-cols-2 ">
                      <span className="col">{item.N_MRP}</span>
                      <span className="col fw-bold">{item.N_Dis}</span>

                    </span>
                  </td>
                  <td>
                    <span className="row row-cols-2 ">
                      <span className="col">{item.v_MRP} </span>
                      <span className="col fw-bold">{item.v_Dis}</span>

                    </span>
                  </td>
                  <td>{item.uni}</td>
                  <td>{item.sho}</td>
                  <td className='fw-bold'>{item.tot}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
