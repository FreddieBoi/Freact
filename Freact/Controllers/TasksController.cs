using Freact.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Freact.Controllers {

    public class TasksController : ApiController {

        private static readonly IEnumerable<Task> tasks = new List<Task> {
            new Task {
                Id = 1,
                Name = "First task",
                Description = "This is my first task.",
                IsCompleted = false
            },
            new Task {
                Id = 2,
                Name = "Another task",
                IsCompleted = false
            },
            new Task {
                Id = 3,
                Name = "Completed task",
                Description = "Do some stuff!",
                IsCompleted = true
            }
        };

        public IEnumerable<Task> GetTasks([FromUri] string term = null) {
            if (string.IsNullOrWhiteSpace(term)) {
                return tasks;
            }
            return tasks.Where(x => x.Name.ToLower().Contains(term.ToLower()));
        }

        public IHttpActionResult GetTask(int id) {
            var task = tasks.FirstOrDefault(p => p.Id == id);
            if (task == null) {
                return NotFound();
            }
            return Ok(task);
        }

    }

}
