import ProjectMemory from '../src/modules/backend/_localStorage';

describe('localStorage', () => {
  // Storage Mock
  function storageMock() {
    const storage = {};

    return {
      setItem(key, value) {
        storage[key] = value || '';
      },
      getItem(key) {
        return key in storage ? storage[key] : null;
      },
      removeItem(key) {
        delete storage[key];
      },
      get length() {
        return Object.keys(storage).length;
      },
      key(i) {
        const keys = Object.keys(storage);
        return keys[i] || null;
      },
    };
  }

  global.localStorage = storageMock();

  describe('Project Memory', () => {
    const projectMemory = new ProjectMemory();

    it('should return an empty list', () => {
      expect(projectMemory.getAllProjects()).toEqual([]);
    });

    it('should add a project', () => {
      const testProject = {
        title: 'testProject',
        task: [],
        class: 'Project',
      };
      projectMemory.addProject(testProject);
      expect(JSON.parse(localStorage.getItem('projects'))).toEqual([{
        id: 0, title: 'testProject', task: [], class: 'Project',
      }]);
    });

    it('should return all projects', () => {
      const testProject = {
        title: 'anotherProject',
        task: [],
        class: 'Project',
      };
      projectMemory.addProject(testProject);
      expect(projectMemory.getAllProjects()).toEqual([{
        id: 0,
        title: 'testProject',
        task: [],
        class: 'Project',
      }, {
        id: 1,
        title: 'anotherProject',
        task: [],
        class: 'Project',
      }]);
    });

    it('should delete a project', () => {
      const projectToDelete = { id: 1 };
      projectMemory.deleteProject(projectToDelete);
      expect(projectMemory.getAllProjects()).toEqual([{
        id: 0,
        title: 'testProject',
        task: [],
        class: 'Project',
      }]);
    });

    it('should update a project', () => {
      const projectToUpdate = {
        id: 0,
        title: 'testProject',
        task: [
          {
            title: 'new task',
          },
        ],
        class: 'Project',
      };

      projectMemory.updateProject(projectToUpdate);
      expect(projectMemory.getAllProjects()).toEqual([{
        id: 0,
        title: 'testProject',
        task: [
          {
            title: 'new task',
          },
        ],
        class: 'Project',
      }]);
    });
  });
});