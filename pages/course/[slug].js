import { useRouter } from 'next/router'

export default function CourseDetails() {
  const router = useRouter();
  const courseId = router.query.courseId;
  return (
    <div>CourseDetails</div>
  )
}
