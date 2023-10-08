import React from "react"
import FormDropdown from "../forms/FormDropdown"
//rca: Object
//level: null or 'sec' or 'ter'

const RCAFormBlock = ({ form, rca, label, level }) => {
  const [l1, l2, l3] = level
    ? [level + "_rca1", level + "_rca2", level + "_rca3"]
    : ["rca1", "rca2", "rca3"]

  return (
    <>
      <label className="label">{label}</label>
      <div className=" box">
        <div className="field ">
          <div className="control is-expanded">
            <FormDropdown
              form={form}
              fieldName={l1}
              options={rca.rca1}
              reset={[l2, l3]}
            ></FormDropdown>
          </div>
        </div>
        <div className="field">
          <div className="control is-expanded">
            <FormDropdown
              form={form}
              fieldName={l2}
              options={form.get(l1) && rca.rca2[form.get(l1)]}
              reset={[l3]}
            ></FormDropdown>
          </div>
        </div>
        <div className="field">
          <div className="control is-expanded">
            <FormDropdown
              form={form}
              fieldName={l3}
              options={
                form.get(l2) &&
                rca.rca3[form.get(l2)] &&
                [
                  rca.rca3[form.get(l2)][form.get("allocation_vertical")], //specific rc3
                  rca.rca3[form.get(l2)][""], //horizontal rc3
                ]
                  .flat() //flattening both arrays
                  .filter((e) => e) //making sure no undefined remains
              }
            ></FormDropdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default RCAFormBlock
