

# The key features of this website:
###  1. Course Selection
- Users can select courses they are interested in by clicking the **Select** button.
The website ensures that the total credit hours of selected courses do not exceed a specified limit (e.g., 20 credits).
- A toast message notifies users if they attempt to select a course that exceeds available credit hours.
### 2. Total Information
- Users can view the total credit hours and the total price of the selected courses.
- The website keeps track of the remaining credit hours as users select or deselect courses.
Selected courses are listed for easy reference.
### 3. Data Fetching
- Course data is dynamically fetched from a JSON file (or an API, if applicable) to populate the course list.
- This approach provides flexibility to easily update course information without changing the code.

# I'd love to share how I handled the state in my assignment project.
# # 1. **CourseList Component State:**
The **`CourseList`** component manages the state of **`courses`**, which is an array of

available courses. This state is initialized using the **`useState`** hook.

   ``
    const [courses, setCourses] = useState([]);``

The **`setCourses`** function is used to update the **`courses`** state when the data is fetched successfully from the JSON file.

```jsx
    setCourses(data.courses);```



# # 2.Remaining Credits State:
The remaining credits are tracked using the **`remainingCredits`** state, also initialized with the **`useState`** hook


   ``` const [remainingCredits, setRemainingCredits] = useState(maxCredits);```


When a course is selected, the **`selectCourse`** function deducts the selected course's

credit from **`remainingCredits`**:


   ``` setRemainingCredits(remainingCredits - course.credit);```

If there are not enough credits to select a course, an alert is displayed.
3. **Selected Courses State:**
    - The **`selectedCourses`** state is used to keep track of the courses that the user has selected. It is initialized as an empty array.

   ``const [selectedCourses, setSelectedCourses] = useState([]);``


When a course is selected, it is added to the **`selectedCourses`** array.


    ```setSelectedCourses([...selectedCourses, course]);```


# # 3. **Updating State in App Component:**
   In the **`App`** component, state is managed by **`CourseList`** for the list of available courses and by itself for rendering the components and layout.

   ``` <CourseList />
    <TotalContainer courses={selectedCourses} />```

   `TotalContainer` calculates and displays information based on the

`selectedCourses` array.

In summary, state management is primarily done using the **`useState`** hook, and the states are updated as users interact with the course selection feature. This allows for dynamic updates to the UI based on changes in the selected courses and remaining credits.
___