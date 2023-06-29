myApp.controller('myCtrl', function ($scope) {
     $scope.student = {
          name: "Rahul",
          rollno: 1,
          branch: "CSE",
          sem1: [{ subject: 'java', marks: 80 },
          { subject: 'maths', marks: 85 },
          { subject: 'DS', marks: 85 },
          { subject: 'c++', marks: 85 },
          { subject: 'Python', marks: 85 }

          ],
          sem2: [{ subject: 'java', marks: 80 },
          { subject: 'maths', marks: 85 },
          { subject: 'DSA', marks: 85 },
          { subject: 'c', marks: 85 },
          { subject: 'Python', marks: 85 }

          ],
          sem3: [{ subject: 'java', marks: 80 },
          { subject: 'phys', marks: 85 },
          { subject: 'DS', marks: 85 },
          { subject: 'vls', marks: 85 },
          { subject: 'Db2', marks: 85 }

          ]
     }
})