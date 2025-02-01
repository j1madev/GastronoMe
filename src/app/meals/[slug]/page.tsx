function MealPage({ params }: { params: { slug: string } }) {
  return <div>MealPage with slug: {params.slug}</div>
}

export default MealPage
