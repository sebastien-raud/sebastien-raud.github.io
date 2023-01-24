<?php

class Mother {
    public static function testStatic() {
        echo self::class . ' ' . static::class . PHP_EOL;
    }
}


class Child extends Mother {
}

echo Mother::testStatic(); // Mother Mother
echo Child::testStatic();  // Mother Child