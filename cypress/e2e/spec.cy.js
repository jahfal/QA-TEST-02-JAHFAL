import visitwebsite from "../integration/visitURL";
import addTaskClass from "../integration/addTask";
import verifyMarkedClass from "../integration/verifyMarked";

describe("ToDo MVC", () => {
  const addedTask = new addTaskClass();
  beforeEach(() => {
    cy.visit("https://todomvc.com/examples/react/dist/");
  });

  it("MVC-01 Verify that the page is loaded successfully", () => {
    const URL = new visitwebsite();
    URL.verifyURL();
  });
  it("MVC-02 Add task & verify that the task is correctly added to the list", () => {
    addedTask.addTask();
    const markedTasks = new verifyMarkedClasses();
    markedTasks.verifyMarkedTasks();
  });
  it("MVC-03 Write a test to mark a task as completed & verify that task is visually marked completed", () => {
    addedTask.addTask();
    const markedTasks = new verifyMarkedClass();
    markedTasks.verifyMarkedTasks();
  });
  it("MVC-04 Delete task and verify that the task is removed to the list", () => {
    addedTask.addTask();
    cy.xpath("//li[2]//div[1]//button[1]").click({ force: true });
    cy.xpath("//main[@class='main']//li").should("have.length", 2);
  });
  it.only("MVC-05 Filter task", () => {
    addedTask.addTask();
    cy.xpath("//li[1]//div[1]//input[1]").click();
    cy.xpath("//a[normalize-space()='Active']").click();
    cy.xpath("//main[@class='main']//li").should("have.length", 2);
    cy.xpath("//a[normalize-space()='Completed']").click();
    cy.xpath("//main[@class='main']//li").should("have.length", 1);
  });
});
