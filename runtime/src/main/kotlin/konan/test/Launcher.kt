package konan.test

import kotlin.system.exitProcess

class SimpleTestListener: TestListener {

    var hasFails = false
        private set

    override fun startTesting(runner: TestRunner) = println("Starting testing")
    override fun endTesting(runner: TestRunner) = println("Testing finished")

    override fun startSuite(suite: TestSuite) = println("Starting test suite: $suite")
    override fun endSuite(suite: TestSuite) = println("Test suite finished: $suite")
    override fun ignoreSuite(suite: TestSuite) = println("Test suite ignored: $suite")

    override fun start(testCase: TestCase) = println("Starting test case: $testCase")
    override fun pass(testCase: TestCase) = println("Passed: $testCase")
    override fun fail(testCase: TestCase, e: Throwable) {
        println("Failed: $testCase. Exception:")
        e.printStackTrace()
        hasFails = true
    }
    override fun ignore(testCase: TestCase) = println("Ignore: $testCase")
}

fun main(args:Array<String>) {
    val listener = SimpleTestListener()
    TestRunner.run(listener)
    exitProcess( if (listener.hasFails) -1 else 0 )
}
