export default {
  title: "Workout",
  name: "workout",
  type: "document",
  fields: [
    {
      title: "Date",
      name: "date",
      type: "datetime",
    },
    {
      title: "Exercises",
      name: "exercises",
      type: "array",
      of: [{ type: "exercise" }]
    }
  ]
}
